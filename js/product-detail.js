$(document).ready(function () {
    // 1. Get Product ID from URL
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('id');

    // 2. Default to 'wood-chair' (or any first item) if no ID is present, OR handle error
    // For this template, we can default to 'chain-block' if nothing is specified for demo purposes
    if (!productId) {
        // Option A: Default to first item
        // productId = 'chain-block';

        // Option B: Do nothing (let static HTML show) - but we want to be dynamic.
        // Let's check if the static HTML has a "placeholder" that we should overwrite.
    }

    // 3. Look up product data
    var product = productsData[productId || 'chain-block']; // Fallback to chain-block for now if null

    if (product) {
        // 4. Update the Page Content

        // Title & Breadcrumb
        $('.sub-bnr h4').text(product.name.toUpperCase());
        $('.shop-detail h4').text(product.name);

        // Images (Main Slider)
        var sliderHtml = '<ul class="slides">';
        product.images.forEach(function (img) {
            sliderHtml += '<li data-thumb="' + img + '"> <img class="img-responsive" src="' + img + '" alt=""> </li>';
        });
        sliderHtml += '</ul>';

        // We need to destroy/re-init flexslider or just replace content if it hasn't loaded yet.
        // Since this runs on ready, flexslider might have already init. 
        // A safer way for flexslider dynamic updates often involves more complex API use.
        // For simplicity, we might simple replace the HTML and hope for main.js to pick it up?
        // Actually, main.js inits flexslider on window.load. If we run this on document.ready, we are ahead of window.load!
        $('.images-slider').html(sliderHtml);

        // Re-initialize FlexSlider
        $('.images-slider').removeData("flexslider");
        $('.images-slider').flexslider({
            animation: "fade",
            controlNav: "thumbnails"
        });


        // Metadata
        $('.item-owner li:first-child span').text(' Europull'); // Brand
        $('.item-owner li:nth-child(2) span').text(' ' + product.category); // Category

        // Description
        $('.shop-detail p').first().text(product.description); // Short desc

        // Specs (Tab Content)
        var specsHtml = '<h6>TECHNICAL SPECIFICATIONS</h6><ul>';
        for (var key in product.specs) {
            specsHtml += '<li><p><strong>' + key + ':</strong> ' + product.specs[key] + '</p></li>';
        }
        specsHtml += '</ul>';
        $('#descr').html('<p>' + product.description + '</p>' + specsHtml);

        // "Add to Quote" Button Data
        var $btn = $('.add-to-quote');
        $btn.data('id', productId);
        $btn.data('name', product.name);
        $btn.data('image', product.images[0]);
        // url is already correct (self)

        // Update document title
        document.title = product.name + " - Europull";
    } else {
        // Handle "Product Not Found"
        $('.shop-detail').html('<div class="alert alert-danger">Product not found.</div>');
    }
});
