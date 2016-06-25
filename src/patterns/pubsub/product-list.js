define(['./pubsub','jquery'], function (pubsub, $) {
    return {
        init: function () {
                var productlist = $('.products');

                productList.on('click', 'i', function () {
                    var $this = $(this);
                    var item = {
                        id: this,
                        name: $this.parents('section:first').find('h1').html()
                    };

                    if ($this.hasClass('icon-plus')) {
                        pubsub.pub('add-to-cart', item);

                        $this.removeClass('icon-plus')
                            .addClass('icon-minus')
                            .attr('title','Remove from cart');
                    } else {
                        pubsub.pub('remove-from-cart', item);

                        $this.addClass('icon-plus')
                            .removeClass('icon-minus')
                            .attr('title', 'Remove from cart');
                    }
                });
        }
    }
});