document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        imageModal: document.getElementById('imageModal'),
        pdfModal: document.getElementById('pdfModal'),
        modalImage: document.getElementById('modalImage'),
        modalPdf: document.getElementById('modalPdf'),
        imageCaption: document.getElementById('imageCaption'),
        pdfCaption: document.getElementById('pdfCaption'),
        pdfItems: document.querySelectorAll('.pdf-item'),
        imgItems: document.querySelectorAll('.galery img'),
        closeButtons: document.querySelectorAll('.close'),
        nav: document.querySelector('nav')
    };

    const displayModal = (modal, otherModal) => {
        modal.style.display = 'flex';
        otherModal.style.display = 'none';
    };

    const hideModal = () => {
        elements.imageModal.style.display = 'none';
        elements.pdfModal.style.display = 'none';
    };

    const setImageModalContent = (imgElement) => {
        elements.modalImage.src = imgElement.src;
        elements.imageCaption.innerHTML = `<p>${imgElement.getAttribute('data-description')}</p>`;
    };

    const setPdfModalContent = (pdfElement) => {
        elements.modalPdf.src = pdfElement.getAttribute('data-pdf-url');
        elements.pdfCaption.innerHTML = `<p>${pdfElement.getAttribute('data-description')}</p>`;
    };

    const initModalHandlers = () => {
        elements.imgItems.forEach(item => {
            item.addEventListener('click', () => {
                setImageModalContent(item);
                displayModal(elements.imageModal, elements.pdfModal);
            });
        });

        elements.pdfItems.forEach(item => {
            item.addEventListener('click', () => {
                setPdfModalContent(item);
                displayModal(elements.pdfModal, elements.imageModal);
            });
        });

        elements.closeButtons.forEach(button => {
            button.addEventListener('click', hideModal);
        });

        document.addEventListener('click', event => {
            if (event.target === elements.imageModal || event.target === elements.pdfModal) {
                hideModal();
            }
        });
    };

    const initNavScroll = () => {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 20) {
                elements.nav.classList.add('sticky');
            } else {
                elements.nav.classList.remove('sticky');
            }
        };
    };

    initModalHandlers();
    initNavScroll();
});
