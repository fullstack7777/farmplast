import React from "react";

function Footer() {
    return (
        <div>
            <footer className="kopa-page-footer d-flex justify-content-center" style={{backgroundColor: "#008da9"}}>
                    <div className='me-auto tex-decor' style={{marginLeft: 20}}>
                        <span >© 2022 ООО Фармплас</span>
                    </div>
                    <div className="me-md-auto">
                        <a className="me-3 tex-decor" href={'/#'}>Продукция</a>
                        <a className="me-3 tex-decor" href={'/#'}>Склады</a>
                        <a className="me-3 tex-decor" href={'/#'}>Контакты</a>
                    </div>
                        <div>
                        <a className="text-end tex-decor" style={{marginRight: 20}} href={'/#'}>Вернуться на верх страницы</a>

                    </div>
            </footer>
        </div>
    );
}
export default Footer;