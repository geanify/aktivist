const getGalleries = () => {
    document?.querySelectorAll('.Gallery .arrow.right')?.forEach((elm, index)=> {
        console.log(elm)
        elm?.addEventListener('click', () => {
            scrollRightGallery()
            scrollButtons()
        })
    })
}

const scrollRightGallery = () => {
    const galleryElm = document?.querySelector('.Gallery');
    const {clientWidth} = galleryElm;
    galleryElm.scrollLeft += clientWidth;
}

const scrollButtons = () => {
    const arrows = document?.querySelectorAll('.Gallery .arrow');
    arrows.forEach(arrow=> {
        console.log(arrow)
        const galleryElm = document?.querySelector('.Gallery');
        const {clientWidth, scrollLeft} = galleryElm;
        if(arrow.classList.contains('left')) {
            arrow.style.left = `${scrollLeft + 5} px`;
        }

        if(arrow.classList.contains('right')) {
            arrow.style.left = `${scrollLeft+clientWidth - 5} px`;
        }
        
    })
}

getGalleries()