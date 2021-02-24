function loadProductsData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sample_products.json',true);
    xhr.onload = function() {
        if(this.status === 200) {
        let productsObjects = JSON.parse(this.responseText);        
        let html = "";
        productsObjects.products.forEach(element => {
            const { price, oldPrice } = element;
            const percent = parseInt(((oldPrice - price)*100)/price);
            const paramsLand = element.params.land;
            const paramsRegion = element.params.region;
            
            

            html += `
                <div class="swiper-slide">
                <a href="${element.url}" target="_blank">
                    <div class="showcaseImg">
                        <div class="showcaseBadge">
                           ${isNaN(percent) ? '' : '<div class="productRebate"> -' + percent + '% </div>' }
                            ${(element.params.isNew ? '<div class="productNeu">NEU</div>' : '')}

                            ${(element.params.likeCount ? '<div class="productLike">'+element.params.likeCount+'</div>' : '')}
                        </div>
                       <img src="${element.imageS}">
                    </div>
                    </a>
                    <div class="showcaseTitle">
                    <a href="${element.url}" target="_blank"> ${element.name}</a>
                    </div>
                    <div class="showcaseParams">
                    ${isNaN(paramsLand) ? '<span> ' + paramsLand  + ' |' + '</span>' : '' }
                    ${isNaN(paramsRegion) ? '<span> ' + paramsRegion  + ' |' + '</span>' : '' }
                    <span>${element.params.art}</span>                        
                    </div>
                    <div class="showcasePrice">
                        <span class="showcasePriceText">
                        ${element.priceText}
                        </span>
                        <span class="showcaseOldPriceText">
                        ${element.oldPriceText}
                        </span>
                    </div>  
                    <div class="showcaseBasePrice">
                    ${element.params.basePrice}
                    </div>  
                </div>           
            ` 
        });
        document.querySelector('.swiper-content').innerHTML = html;
        document.querySelector('.swiper-content-one').innerHTML = html;
        document.querySelector('.swiper-content-two').innerHTML = html;   
        }


    } 
    xhr.send();

}

loadProductsData();




setTimeout(function(){

var swiper = new Swiper('.swiper-container', {
slidesPerView: 1,
spaceBetween: 10,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 20,
        },

    
}
});

var swiper = new Swiper('.swiper-container-one', {
slidesPerView: 1,
spaceBetween: 10,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 20,
        },

}
});

var swiper = new Swiper('.swiper-container-two', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            },

    }
    });

});

