import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogUpdates } from '../Data/BlogUpdates'; // Adjust the import based on your structure
import '../Styles/BlogPost.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = BlogUpdates.find((item) => item.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post" >
      <h1>{post.name}</h1>
      <img src={post.imageUrl} alt={post.name} className='bp-image'/>
      <p style={{width: '80%'}}>{post.description}</p>
      <hr 
        style={{
                        backgroundColor: 'hsl(0, 0.00%, 68.60%)',
                        height: '1px',
                        width: '80%',
                        border: 'none',
                        
                    }}
      />
      <div className='bp-share-link' style={{width: '80%'}}>
        <div></div>
        <div className='bpLinks'>
            <div className='copyLink'><ContentCopyIcon /> Copy link</div>
            <div className='bpIcons'><XIcon/></div>
            <div className='bpIcons'><FacebookIcon/></div>
            <div className='bpIcons'><WhatsAppIcon/></div>
        </div>
      </div>
      
        <div className='mailingSubscriptionBox' style={{marginTop: '10%'}}>
                    <div className='mailingImg'></div>
                    <div className='mailingTexts'>
                        <h1 style={{fontSize: 'clamp(2rem, 3.6vw, 5rem)'
                        }}>Join Mailing List</h1>
                        <p style={{fontSize: 'clamp(1rem, 1.3vw, 1.8rem)',
                                    color: 'hsl(0, 0.00%, 54.10%)',
                                    paddingTop: '8%'
                        }}>Sign up and get all the latest, and videos</p>
                        <div className='mailingInput'>
                            <input placeholder='Email Address' className='emailAddress'></input>
                            <div className='subscribe'>SUBSCRIBE</div>
                        </div>
                    </div>
        </div>
      
    </div>
  );
};

export default BlogPost;
