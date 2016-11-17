const React = require('react')
const dbURL = process.env.REACT_APP_DB
const PouchDB = require('pouchdb-http')
const db = PouchDB(dbURL)

const ResourceForm = React.createClass({
  getInitialState() {
    return {
      recipe: {
        _id: ''
      }
    }
  },
  handleChange(field) {
    return e => {
      let recipe = this.state.recipe
      recipe[field] = e.target.value
      this.setState({recipe})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    db.get(this.state.recipe, (err, result) => {
      if (err) return this.setState({error: err.message})
      this.setState({result: true})
      console.log(result)
    })
  },
  render() {
    return (
      <div>
        <form className="mt7"
              onSubmit={this.handleSubmit}>
          <div>
            <h2>Search For A Recipe </h2>
          </div>
          <div>
            <input className="pa2 db input-reset ba bg-transparent w-100 measure"
              placeholder="recipe"
              onChange={this.handleChange("_id")}
              value={this.state.recipe._id}/>
            <button className="f6 link dim br2 ba ph3 pv2 mb2 dib mid-gray">Search</button>
            <button className="f6 link dim br2 ba ph3 pv2 mb2 dib mid-gray">See All Recipes</button>
          </div>
          <div>
            <h2>Search By Ingredient</h2>
          </div>
          <div>
            <input className="pa2 db input-reset ba bg-transparent w-100 measure"
              placeholder="ingredient name"/>
              <button className="f6 link dim br2 ba ph3 pv2 mb2 dib mid-gray">Search</button>
              <button className="f6 link dim br2 ba ph3 pv2 mb2 dib mid-gray">See All Ingredients</button>
          </div>
        </form>
        <pre>{JSON.stringify(this.state.recipe, null, 2)}</pre>
        {this.setState.error}
        <pre>{JSON.stringify(this.setState.recipe, null, 2)}</pre>

      </div>
    )
  }
})

module.exports = ResourceForm
