# Redux Shopping Cart Project - Update Log

## Latest Updates (Redux Integration & Refactoring)

This update focuses on integrating the Shopping Cart logic with Redux, refactoring components for better maintainability, and implementing dynamic calculations.

### 1. New Features & Logic
-   **Redux Connection**: Connected `MyCart.jsx` and `ProductCard.jsx` to the Redux store.
-   **Dynamic Cart Calculations**: Implemented real-time calculation for "Subtotal" and "Total" prices in the cart.
-   **Auto-Remove Item**: Implemented logic to automatically remove an item from the cart if its quantity is decreased to 0.
-   **Named Event Handlers**: Refactored anonymous inline functions to named handlers (`handleIncreaseQuantity`, `handleDecreaseQuantity`) for better readability and debugging.

### 2. Component Refactoring
-   **New Component (`<Cartitem />`)**: Extracted the cart item rendering logic from `MyCart.jsx` into a reusable `src/components/Cartitem.jsx` component. This reduces the complexity of the main page and promotes code reuse.
-   **Prop Renaming**: Updated `Cartitem` to use the `product` prop instead of `item` for clarity.

### 3. Redux Store & Reducers Fixes
-   **Fixed `cartReducer`**:
    -   Corrected logic for adding existing items (updating quantity instead of duplication).
    -   Fixed `findProductInCart` helper function.
    -   Ensure `state` mutations are handled immutably.
-   **Fixed `productReducer`**:
    -   Corrected payload access in `REMOVE_QUANTITY` action.
-   **Fixed Action Types**: Resolved mismatches in `actionTypes.js` imports between products and carts.

### 4. Bug Fixes
-   **Fixed Import Errors**: Corrected file paths for `MyCart` import in `Page.jsx`.
-   **Fixed Reference Errors**: Resolved `dispatch is not defined` and `item is not defined` errors.
-   **Fixed Prop Mismatches**: Aligned prop names between parent (`MyCart`) and child (`Cartitem`) components.

---
### File Structure Changes
-   `src/components/Cartitem.jsx` (New)
-   `src/pages/MyCart.jsx` (Modified)
-   `src/redux/carts/cartsreducer.js` (Modified)
-   `src/redux/products/productReducer.js` (Modified)
