Responsive Cart Page
Project Overview
The Responsive Cart Page is a dynamic and mobile-friendly web page designed to display cart items with a visually appealing layout. The page fetches cart data from a provided JSON API and allows users to update item quantities, remove items, and view updated totals in real time. It adheres to modern design standards and ensures an optimal user experience across devices.

Features
Dynamic Cart Items:

Items are fetched from a JSON API and displayed dynamically.
Each item includes a product image, name, price, quantity input, and subtotal.
Real-Time Updates:

Update quantities dynamically, recalculating subtotals and totals.
Remove items from the cart with a single click.
Responsive Design:

Fully responsive layout for seamless use on desktops, tablets, and mobile devices.
Clean & Modern UI:

Designed based on a professional reference with intuitive navigation and layout.
Currency Formatting:

Displays prices in Indian Rupees (₹) with proper formatting.
Technologies Used
HTML: Markup structure of the cart page.
CSS: Styling to match the reference design and ensure responsiveness.
JavaScript: Dynamic functionality, including API calls, quantity updates, and item removal.
JSON API: Fetching cart data dynamically.
How to Use
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/responsive-cart-page.git
Navigate to the project directory:
bash
Copy code
cd responsive-cart-page
Open the index.html file in your browser to view the cart page.
File Structure
graphql
Copy code
responsive-cart-page/
├── index.html         # Main HTML structure
├── styles.css         # CSS for styling the cart page
├── script.js          # JavaScript for dynamic functionality
├── README.md          # Project documentation
└── assets/            # Contains images and other assets
JSON API Details
The cart data is retrieved from the following API: API Cart Data

Example JSON Structure:
json
Copy code
{
  "cartItems": [
    {
      "id": 1,
      "name": "Asgaard Sofa",
      "image": "path/to/image.jpg",
      "price": 250000,
      "quantity": 1
    }
  ]
}
Responsive Design
The layout is optimized for:

Desktop: Two-column design with cart items on the left and totals on the right.
Tablet/Mobile: Stacked layout for better readability and usability.
Features to Implement in Future
Save Cart State: Store cart data in localStorage to retain updates after a page reload.
Apply Discounts: Add functionality for promo codes or discounts.
Backend Integration: Extend functionality with server-side API for persistence.
