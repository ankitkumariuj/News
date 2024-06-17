import React, { Component } from 'react'


export default class NewsItem extends Component {

    render() {
        let {title , description , imageurl, url ,published,author,source} = this.props;
        return (
          <div>
             <div>
                    <div className="card" style={{width: "18rem", marginLeft: "28px"}}>
                        <img src={!imageurl?"https://www.gp.se/images/og/d3068fbc-35d9-4166-90ab-0eb60f26b2ce/images/2wqUYRuqLJfKJ8ct5R7Me8POw_QI-WIDE.jpg?width=1200&quality=75":imageurl} className="card-img-top" alt="..."/>
                            <div className="card-body" style={{backgroundColor: "transparent"}}>
                            <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-success">
{source}
    <span class="visually-hidden">unread messages</span>
  </span>
                                <h5 className="card-title" >{!title?"Ambulance ramping smashes previous record in SA as war of words erupts over election - ABC News..":title}...</h5>
                                <p className="card-text">{!description? "PlayStation’s new State of Play games showcase revealed a new Astro Bot, God of War Ragnarok for PC, plus new details on Concord, Monster Hunter Wilds, and more":description}...</p>
                                <a href={url} target="_blank" className="btn btn-sm btn-info">Read more</a>
                                <p class="card-text"><small class="text-muted">By {author} last update on {new Date(published).toUTCString()}</small></p>

                            </div>
                    </div>
                    </div>
          </div>
    )
  }
}
