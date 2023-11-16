```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Blog from '../src/components/Blog';
import ScrollToTop from '../src/components/ScrollToTop';

test('renders App without crashing', () => {
  render(<App />);
});

test('renders Navbar component', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/skills/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Projects component', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact component', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Blog component', () => {
  render(<Blog />);
  const linkElement = screen.getByText(/blog/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ScrollToTop component', () => {
  render(<ScrollToTop />);
  const linkElement = screen.getByText(/scrollToTop/i);
  expect(linkElement).toBeInTheDocument();
});
```