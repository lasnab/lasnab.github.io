import React from 'react';
import { navbar } from '../../data';
import { Link } from 'react-router-dom';

function NavBar() {
  const { home, name, title, links } = navbar;
  return (
    <div
      className="fixed w-100 pa2 pt3-ns pb-2-ns ph5-ns top-0 bg-near-black"
      style={{ zIndex: '9999' }}
    >
      <div className="db dt-ns mw9 white center">
        <div className="db dtc-ns v-mid tl w-50">
          <Link to={home} className="dib f3 f2-ns fw6 mt0 mb1 link white">
            {name}
            <div className="dib">
              <small className="nowrap f6 pr2 white-70 fw2">{title}</small>
            </div>
          </Link>
        </div>
        <div className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          {links.map((link) =>
            link.external_link_path ? (
              <a
                className="f5 f4-ns fw6 hover-blue link white mr2 mr3-m mr4-l dib"
                href={link.external_link_path}
                target="_blank"
              >
                {link.link_name}
              </a>
            ) : (
              <Link
                to={link.link_path}
                className="f5 f4-ns fw6 hover-blue link white mr2 mr3-m mr4-l dib"
              >
                {link.link_name}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
