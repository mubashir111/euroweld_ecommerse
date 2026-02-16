/**
 * Quote Cart Logic for Europull
 * Handles adding/removing items to a quote basket using localStorage.
 */

var QuoteCart = (function ($) {
    "use strict";

    var STORAGE_KEY = 'europull_quote_cart';
    var cart = [];

    function init() {
        loadCart();
        updateCartCount();
        bindEvents();
    }

    function loadCart() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                cart = JSON.parse(stored);
            } catch (e) {
                console.error("Error parsing cart data", e);
                cart = [];
            }
        }
    }

    function saveCart() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        updateCartCount();
    }

    function addToCart(product) {
        // Check if item exists
        var existing = cart.find(function (item) { return item.id === product.id; });
        if (existing) {
            existing.qty += product.qty || 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                url: product.url,
                qty: product.qty || 1
            });
        }
        saveCart();
        alert("Item added to Quote Basket!");
    }

    function removeFromCart(id) {
        cart = cart.filter(function (item) { return item.id !== id; });
        saveCart();
        renderCartPage(); // Re-render if on cart page
    }

    function updateCartCount() {
        var count = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
        $('.quote-basket-count').text(count);
    }
    
    function getCart() {
        return cart;
    }

    function renderCartPage() {
        var $container = $('#quote-cart-body');
        if ($container.length === 0) return;

        $container.empty();

        if (cart.length === 0) {
            $container.html('<tr><td colspan="4" class="text-center">Your quote basket is empty.</td></tr>');
            return;
        }

        cart.forEach(function (item) {
            var html = `
                <tr>
                    <td class="text-left">
                        <div class="media">
                            <div class="media-left"> <a href="${item.url}"> <img class="media-object" src="${item.image}" alt="${item.name}" style="width: 100px;"> </a> </div>
                            <div class="media-body">
                                <h4 class="media-heading"><a href="${item.url}">${item.name}</a></h4>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        <input type="text" value="${item.qty}" readonly class="form-control" style="width: 50px; margin: 0 auto;">
                    </td>
                    <td class="text-center">
                        <a href="#" class="remove-item" data-id="${item.id}"><i class="icon-close"></i></a>
                    </td>
                </tr>
            `;
            $container.append(html);
        });

        // Update hidden form input with cart data
        $('#quote_items_data').val(JSON.stringify(cart));
    }

    function bindEvents() {
        // Remove item click
        $(document).on('click', '.remove-item', function (e) {
            e.preventDefault();
            var id = $(this).data('id');
            removeFromCart(id);
        });

        // Add to Quote Click (Global delegate)
        $(document).on('click', '.add-to-quote', function (e) {
            e.preventDefault();
            var $btn = $(this);
            var product = {
                id: $btn.data('id'),
                name: $btn.data('name'),
                image: $btn.data('image'),
                url: $btn.data('url'),
                qty: 1
            };
            addToCart(product);
        });
    }

    return {
        init: init,
        renderCartPage: renderCartPage
    };

})(jQuery);

$(document).ready(function () {
    QuoteCart.init();
    // If we are on the quote cart page, render it
    if ($('#quote-cart-body').length > 0) {
        QuoteCart.renderCartPage();
    }
});
