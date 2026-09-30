import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const STAGGER = 0.035;

export function AnimatedMenuText({
  children,
  className,
  center = false,
}: {
  children: string;
  className?: string;
  center?: boolean;
}) {
  const delayFor = (index: number) =>
    center
      ? STAGGER * Math.abs(index - (children.length - 1) / 2)
      : STAGGER * index;

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn('relative block overflow-hidden', className)}
      style={{ lineHeight: 0.95 }}
    >
      <span className="block" aria-hidden="true">
        {children.split('').map((character, index) => (
          <motion.span
            key={`top-${index}`}
            variants={{ initial: { y: 0 }, hovered: { y: '-100%' } }}
            transition={{ ease: 'easeInOut', delay: delayFor(index), duration: 0.3 }}
            className="inline-block"
          >
            {character === ' ' ? '\u00a0' : character}
          </motion.span>
        ))}
      </span>
      <span className="absolute inset-0 block" aria-hidden="true">
        {children.split('').map((character, index) => (
          <motion.span
            key={`bottom-${index}`}
            variants={{ initial: { y: '100%' }, hovered: { y: 0 } }}
            transition={{ ease: 'easeInOut', delay: delayFor(index), duration: 0.3 }}
            className="inline-block"
          >
            {character === ' ' ? '\u00a0' : character}
          </motion.span>
        ))}
      </span>
      <span className="sr-only">{children}</span>
    </motion.span>
  );
}
