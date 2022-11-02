// rcc

import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <section className="pt-4">
        <div className="container ">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <div className="col-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection" />
                  </div>
                  <h4 className="font-weight-bold" style={{fontSize:'1.5rem'}}>Fresh new layout</h4>
                  <p className="mb-0">
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-cloud-download" />
                  </div>
                  <h4 className="font-weight-bold" style={{fontSize:'1.5rem'}}>Free to download</h4>
                  <p className="mb-0">
                    As always, Start Bootstrap has a powerful collectin of free
                    templates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-card-heading" />
                  </div>
                  <h4 className="font-weight-bold" style={{fontSize:'1.5rem'}}>Jumbotron hero header</h4>
                  <p className="mb-0">
                    The heroic part of this template is the jumbotron hero
                    header!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-bootstrap" />
                  </div>
                  <h3 className="font-weight-bold" style={{fontSize:'1.5rem'}}>Feature boxes</h3>
                  <p className="mb-0">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-code" />
                  </div>
                  <h4 className="font-weight-bold" style={{fontSize:'1.5rem'}}>Simple clean code</h4>
                  <p className="mb-0">
                    We keep our dependencies up to date and squash bugs as they
                    come!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-patch-check" />
                  </div>
                  <h4 className="font-weight-bold" style={{fontSize:'1.5rem'}}>A name you trust</h4>
                  <p className="mb-0">
                    Start Bootstrap has been the leader in free Bootstrap
                    templates since 2013!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
