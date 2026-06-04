import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cursor from './Cursor';

describe('Cursor', () => {
  it('mounts on a fine-pointer device', () => {
    const { container } = render(<Cursor />);
    expect(container.firstChild).not.toBeNull();
  });

  it('survives pointer events whose target is a text node', () => {
    render(<Cursor />);

    // The real-world crash: a mouse event can originate from a Text node, which
    // has no `.closest`. We dispatch from one to make sure the handler resolves
    // to an Element first. If it doesn't, the thrown TypeError is reported as a
    // window 'error' and the setup guard fails the test.
    const p = document.createElement('p');
    p.textContent = 'hover me';
    document.body.appendChild(p);
    const textNode = p.firstChild as Text;

    textNode.dispatchEvent(new MouseEvent('mouseenter', { bubbles: false }));
    textNode.dispatchEvent(new MouseEvent('mouseleave', { bubbles: false }));

    p.remove();
  });
});
