import { render } from "@testing-library/react-native";
import Root from "./+html";

describe('Root', () => {
    it('renders html element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('html')).toBeInTheDocument();
    });
  
    it('renders head element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('head')).toBeInTheDocument();
    });
  
    it('renders meta charset element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('meta', { name: 'charset' })).toBeInTheDocument();
    });
  
    it('renders meta X-UA-Compatible element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('meta', { name: 'X-UA-Compatible' })).toBeInTheDocument();
    });
  
    it('renders meta viewport element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('meta', { name: 'viewport' })).toBeInTheDocument();
    });
  
    it('renders ScrollViewStyleReset element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('ScrollViewStyleReset')).toBeInTheDocument();
    });
  
    it('renders style element with responsiveBackground', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('style', { dangerouslySetInnerHTML: { __html: expect.any(String) } })).toBeInTheDocument();
    });
  
    it('renders body element', () => {
      const { getByRole } = render(<Root><div>Child element</div></Root>);
      expect(getByRole('body')).toBeInTheDocument();
    });
  
    it('renders children elements', () => {
      const { getByText } = render(<Root><div>Child element</div></Root>);
      expect(getByText('Child element')).toBeInTheDocument();
    });
  });
  