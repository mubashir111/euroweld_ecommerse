$(document).ready(function () {
    var container = $('#dynamic-products-container');
    if (container.length === 0 || typeof productsData === 'undefined') return;

    // Group products by category
    var categorized = {};
    // Defined order for categories
    var categoryOrder = [
        "Hoists",
        "Trolleys",
        "Winches",
        "Lifting Slings",
        "Clamps",
        "Material Handling",
        "Accessories"
    ];

    for (var key in productsData) {
        if (productsData.hasOwnProperty(key)) {
            var product = productsData[key];
            var cat = product.category || 'Other';
            if (!categorized[cat]) categorized[cat] = [];
            categorized[cat].push($.extend({ id: key }, product));
        }
    }

    // Render sections based on defined order (and any others at the end)
    var categoriesToRender = categoryOrder.concat(Object.keys(categorized).filter(function (c) {
        return categoryOrder.indexOf(c) < 0;
    }));

    categoriesToRender.forEach(function (cat) {
        if (!categorized[cat]) return;

        var products = categorized[cat];
        var section = $('<section class="shop-page padding-top-50 padding-bottom-50"></section>');
        var containerDiv = $('<div class="container"></div>');

        // Section Heading
        containerDiv.append('<div class="heading text-left"><h4>' + cat + '</h4><hr></div>');

        var row = $('<div class="papular-block row"></div>');

        products.forEach(function (p) {
            var img = p.images && p.images.length > 0 ? p.images[0] : 'images/no-image.jpg'; // Fallback

            var itemHtml = `
            <div class="col-md-3 col-sm-6">
                <div class="item">
                    <div class="item-img"> 
                        <img class="img-1" src="${img}" alt="${p.name}"> 
                        <img class="img-2" src="${img}" alt="${p.name}">
                        <div class="overlay">
                            <div class="position-center-center">
                                <div class="inn">
                                    <a href="${img}" data-lighter><i class="icon-magnifier"></i></a>
                                    <a href="product-detail_01.html?id=${p.id}"><i class="icon-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-name"> 
                        <a href="product-detail_01.html?id=${p.id}">${p.name}</a>
                        <p>${p.description ? p.description.substring(0, 50) + '...' : ''}</p>
                    </div>
                    <span class="price">
                        <a href="product-detail_01.html?id=${p.id}" class="btn btn-small btn-round">View Detail</a>
                    </span>
                </div>
            </div>`;
            row.append(itemHtml);
        });

        containerDiv.append(row);
        section.append(containerDiv);
        container.append(section);
    });
});
