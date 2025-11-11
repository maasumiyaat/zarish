// Common Footer Loader
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a placeholder for footer
    const footerPlaceholder = document.querySelector('<!--#include file="_includes/footer.html" -->') || 
                             document.querySelector('.footer-placeholder');
    
    if (footerPlaceholder || !document.querySelector('.ftco-footer')) {
        fetch('_includes/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Footer file not found');
                }
                return response.text();
            })
            .then(data => {
                // Find where to insert the footer
                const loader = document.getElementById('ftco-loader');
                const main = document.querySelector('main');
                
                if (footerPlaceholder) {
                    footerPlaceholder.outerHTML = data;
                } else if (loader) {
                    loader.insertAdjacentHTML('beforebegin', data);
                } else if (main) {
                    main.insertAdjacentHTML('afterend', data);
                } else {
                    // Fallback: insert before closing body tag
                    document.body.insertAdjacentHTML('beforeend', data);
                }
                
                // Initialize any footer animations or effects
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            })
            .catch(error => {
                console.log('Footer load error:', error);
                // If fetch fails, you could have a fallback footer here
            });
    }
});
