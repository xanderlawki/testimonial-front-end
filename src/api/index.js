import axios from 'axios';

const url = 'https://xander-testimonial.herokuapp.com/posts'

export const fetchpost = ()=> axios.get(url)
export const createpost = (post)=> axios.post(url, post)