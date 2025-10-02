import {render,screen,fireEvent} from '@testing-library/react';
import { useCart } from './context/CartContext';
import { useFilters } from './context/FilterContext';
import App from './src/app';

//Mock context hooks
jest.mock ("./context/CartContext",()=>({
    useCart: jest.fn(),
}));
jest.mock ("./context/FilterContext",()=>({
    useFilters: jest.fn(),
}));

//Mock mockProducts for consistent testing
jest.mock("./mockdata/mockProducts",() => ({
    mockProducts:[
        {id: 1, title: 'Product 1', description: 'Desc 1', category: 'cat1'},
        {id: 2, title: 'Product 2', description: 'Desc 2', category: 'cat2'},
        {id: 3, title: 'Product 3', description: 'Desc 3', category: 'cat3'},
        {id: 4, title: 'Product 4', description: 'Desc 4', category: 'cat4'},
        {id: 5, title: 'Product 5', description: 'Desc 5', category: 'cat5'}
    ],categores:["cat1",'cat2','cat3','cat4','cat5'],
}));

describe ('App Component', () => {
    const mockCartItems = [];
    const mockAddToCart = jest.fn();
    const mockRemoveFromCart = jest.fn();
    const mockSelectedCategories = [];
    const mockToggleCategory = jest.fn();
    const mockSearchTerm = '';
    const mockSetSearchTerm = jest.fn();

    beforeEach(() => {
        useCart.mockReturnValue({
            cartItems: mockCartItems,
            addToCart: mockAddToCart,
            removeFromCart: mockRemoveFromCart
        });
        useFilters.mockReturnValue({
            selectedCategories: mockSelectedCategories,
            toggleCategory: mockToggleCategory,
            searchTerm: mockSearchTerm,
            setSearchTerm: mockSetSearchTerm,
        });
    });
    it ('renders without crashing',()=> {
        render(<App/>);
        expect(screen.getByText(/Cart/i)).toBeInTheDocument();
    });
    it('displays cart count in Header', () => {
    useCart.mockReturnValue({
      cartItems: [{ id: 1 }],
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
    });
    render(<App />);
    expect(screen.getByText(/Cart \(1\)/i)).toBeInTheDocument(); // Assuming Header displays count
    });
    it('renders all child components', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main element
    expect(screen.getByRole('searchbox')).toBeInTheDocument(); // Assuming SearchBar is an input
    // Add more assertions for other components if they have unique identifiers
     });
    it('displays cart count in Header', () => {
    useCart.mockReturnValue({
      cartItems: [{ id: 1 }],
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
    });
    render(<App />);
    expect(screen.getByText(/Cart \(1\)/i)).toBeInTheDocument(); // Assuming Header displays count
    });
    it('filters products based on selected categories', () => {
    useFilters.mockReturnValue({
      selectedCategories: ['cat1'],
      toggleCategory: mockToggleCategory,
      searchTerm: '',
      setSearchTerm: mockSetSearchTerm,
    });
    render(<App />);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument(); // Assuming ProductGrid renders titles
    expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
    });
    it('opens and closes CartModal', () => {
    render(<App />);
    const cartButton = screen.getByText(/Cart/i);
    fireEvent.click(cartButton);
    expect(screen.getByText(/Your Cart/i)).toBeInTheDocument(); // Assuming CartModal renders 'Your Cart'
    const closeButton = screen.getByText(/Close/i); // Assuming CartModal has 'Close' button
    fireEvent.click(closeButton);
    expect(screen.queryByText(/Your Cart/i)).not.toBeInTheDocument();
    });
    it('calls addToCart when adding a product', () => {
    render(<App />);
    const addButton = screen.getByText(/Add to Cart/i); // Assuming ProductGrid has an 'Add to Cart' button
    fireEvent.click(addButton);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    });
})