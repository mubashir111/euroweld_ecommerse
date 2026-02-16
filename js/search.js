$(document).ready(function () {
    // Check if we are on the products page and have a search query
    var urlParams = new URLSearchParams(window.location.search);
    var searchQuery = urlParams.get('s');

    if (searchQuery) {
        searchQuery = searchQuery.toLowerCase().trim();
        console.log("Searching for:", searchQuery);

        // Filter products
        var foundMatches = false;
        $('.papular-block .item').each(function () {
            var $item = $(this);
            var itemName = $item.find('.item-name a').text().toLowerCase();
            var itemDesc = $item.find('.item-name p').text().toLowerCase();

            if (itemName.includes(searchQuery) || itemDesc.includes(searchQuery)) {
                $item.parent().show(); // Ensure parent col is visible
                foundMatches = true;
            } else {
                $item.parent().hide(); // Hide the column containing the item
            }
        });

        // Show feedback
        var $heading = $('.heading h4');
        if (foundMatches) {
            $heading.text('Search Results for: "' + searchQuery + '"');
        } else {
            $heading.text('No results found for: "' + searchQuery + '"');
            $('.papular-block').append('<div class="col-xs-12 text-center"><p>Sorry, no products matched your search. <a href="products.html">View all products</a></p></div>');
        }
    }
});
