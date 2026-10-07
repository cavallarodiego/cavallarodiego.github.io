import { useLayoutEffect, useRef, type RefObject } from 'react';
import { projectEnglishCopy } from './projectEnglishCopy';

type OriginalText = { italian: string; english: string };

const translate = (value: string) => {
  const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!match) return null;
  const key = match[2].replace(/\s+/g, ' ');
  const english = projectEnglishCopy[key];
  return english === undefined ? null : `${match[1]}${english}${match[3]}`;
};

export function useProjectEnglishCopy(rootRef: RefObject<HTMLDivElement | null>, lang: 'it' | 'en') {
  const originals = useRef(new WeakMap<Text, OriginalText>());
  const originalAttributes = useRef(new WeakMap<Element, Map<string, OriginalText>>());

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const updateText = (node: Text) => {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, textarea, input, [contenteditable="true"]')) return;

      const current = node.data;
      const saved = originals.current.get(node);
      if (lang === 'it') {
        if (saved && current === saved.english) node.data = saved.italian;
        return;
      }

      if (saved && current === saved.english) return;
      const english = translate(current);
      if (!english || english === current) return;
      originals.current.set(node, { italian: current, english });
      node.data = english;
    };

    const updateAttributes = (element: Element) => {
      for (const name of ['alt', 'aria-label', 'title', 'placeholder']) {
        const current = element.getAttribute(name);
        if (current === null) continue;
        const saved = originalAttributes.current.get(element)?.get(name);
        if (lang === 'it') {
          if (saved && current === saved.english) element.setAttribute(name, saved.italian);
          continue;
        }
        if (saved && current === saved.english) continue;
        const english = translate(current);
        if (!english || english === current) continue;
        let attributes = originalAttributes.current.get(element);
        if (!attributes) {
          attributes = new Map();
          originalAttributes.current.set(element, attributes);
        }
        attributes.set(name, { italian: current, english });
        element.setAttribute(name, english);
      }
    };

    const updateTree = (element: Node) => {
      if (element.nodeType === Node.TEXT_NODE) {
        updateText(element as Text);
        return;
      }
      if (element.nodeType !== Node.ELEMENT_NODE) return;
      updateAttributes(element as Element);
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (node.nodeType === Node.TEXT_NODE) updateText(node as Text);
        else updateAttributes(node as Element);
      }
    };

    updateTree(root);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'characterData') updateTree(record.target);
        if (record.type === 'attributes') updateAttributes(record.target as Element);
        for (const node of record.addedNodes) updateTree(node);
      }
    });
    observer.observe(root, { childList: true, characterData: true, attributes: true, attributeFilter: ['alt', 'aria-label', 'title', 'placeholder'], subtree: true });
    return () => observer.disconnect();
  }, [rootRef, lang]);
}
