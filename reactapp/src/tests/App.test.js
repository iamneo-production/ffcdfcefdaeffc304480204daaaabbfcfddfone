import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Home from './components/Home';
import App from './App';

test('test_case1', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('test_case2', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('About us')).toBeInTheDocument();
});

test('test_case3', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('Destination')).toBeInTheDocument();
});

test('test_case4', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});

test('test_case5', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <About />
    </MemoryRouter>
  );
  expect(screen.getByTestId('about')).toBeInTheDocument();
});
test('test_case6', () => {
  render(
    <MemoryRouter initialEntries={['/destination']}>
      <Destination />
    </MemoryRouter>
  );
  expect(screen.getByTestId('destination')).toBeInTheDocument();
});


test('test_case7', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <Contact />
    </MemoryRouter>
  );
  expect(screen.getByTestId('contact')).toBeInTheDocument();
});


test('test_case8', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByTestId('/')).toBeInTheDocument();
});

test('test_case9', () => {
  render(
    <MemoryRouter initialEntries={['/**']}>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByTestId('/')).toBeInTheDocument();
});