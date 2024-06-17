import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Loding';
import Loding from './Loding';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
  
  
  
  constructor() {
        super();
        console.log("hello i m condtry");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

   async componentDidMount(){
      let url= `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apikey=8c12ce80186140c48e71ed2100ad855e&page=1&pagesize=6`;
      this.setState({loading:true}); 
      let data = await fetch(url);
      let parsedData = await data.json()

      console.log(parsedData);
      this.setState({articles: parsedData.articles,
         totalResults: parsedData.totalResults,
        loading: false
      
      })
    }
handlepreclick = async ()=>{
  console.log("previous");

  let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8c12ce80186140c48e71ed2100ad855e&page=${this.state.page - 1}&pagesize=6`;
  this.setState({loading:true}); 
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData)
  this.setState({
page: this.state.page - 1,
articles: parsedData.articles,
loading: false
})
}

handleNextclick = async ()=>{
  console.log("next");
if(!(this.state.page + 1>Math.ceil (this.state.totalResults/10))){
  let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8c12ce80186140c48e71ed2100ad855e&page=${this.state.page + 1}&pagesize=6`;
  this.setState({loading:true});   
  
  let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
page: this.state.page + 1,
articles: parsedData.articles,
loading: false
      })
    }
  }

    
    render() {

        return (
            <div className="container my-3">
                <h2 className='text-center' style={{marginTop: "78px", color: "#979088"}}>Top Headlines</h2>
                {this.state.loading && <Loding/>}
                <div className="row" style={{marginTop : "79px"}}>
                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage}  url={element.url} published={element.publishedAt} author={element.author} source={element.source.name}/>
                        </div>

                    })}


                </div>

                <div className='controls'>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3" onClick={this.handlepreclick}> &larr; Previous</button>
                <button disabled={this.state.page + 1>Math.ceil (this.state.totalResults/10)} type="button" className="btn btn-dark my-3" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
                </div>
            </div>

        )
    }
}

