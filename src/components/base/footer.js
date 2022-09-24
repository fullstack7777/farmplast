import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

function Footer() {
    return (
        <div>
            <footer className="kopa-page-footer d-flex justify-content-center" style={{backgroundColor: "#19beda"}}>
                    <div className='me-auto' style={{marginLeft: 20}}>
                        <span >© 1997 ООО Фармплас</span>
                    </div>
                    <div className="me-md-auto">
                        <a className="me-3 tex-decor" href={'/#'}>Продукция</a>
                        <a className="me-3 tex-decor" href={'/#'}>Склады</a>
                        <a className="me-3 tex-decor" href={'/#'}>Контакты</a>
                        <a className="me-3 tex-decor" href={'/#'}>Blank page</a>
                    </div>
                        <div>
                        <a className="text-end tex-decor" href={'/#'}>Вернуться на верх страницы</a><FontAwesomeIcon icon={"up"}/>
                    </div>
            </footer>
        </div>
    );
}
export default Footer;