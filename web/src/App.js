const React = require('react')
const ResourceForm = require('./pages/resources/searchRecipe')

const App = React.createClass({
  render () {
    return (
      <div className="pa4">
        <div>
          <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <h2 className="white dib">Simple Recipe App</h2>
              <nav className="f6 fw6 ttu tracked mw8">
                <a className="link dim white dib mr3" href="#" title="Home">Home</a>
                <a className="link dim white dib mr3" href="#" title="About">Add</a>
                <a className="link dim white dib mr3" href="#" title="Store">Search</a>
                <a className="link dim white dib" href="#" title="Contact"></a>
              </nav>
          </header>
        </div>
        <ResourceForm />
      </div>
    )
  }
})

module.exports = App
