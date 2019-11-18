import React, {Component} from 'react';
import './Post.scss';

class Post extends Component {
    render() {

        let tags = this.props.tags.join(" ");

        return (
            <div className='Post'>
                <div className="intro">
                 <p>{this.props.title}</p>
                </div>
                <img className='PostImage' src={this.props.image} alt='#'></img>
                <div className='discription'>
                    <span>likes: {this.props.likes}</span>
               <br/>
                    <span> #{tags} </span>
                    <span>{this.props.created}</span>
                    <span>{this.props.id}</span>

                </div>

            </div>
        );
    }
}

export default Post;