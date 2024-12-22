import './BlogAndNews.css'
import Title from '../Title/Title'
import BlogAndNewsCard from '../BlogAndNewsCard/BlogAndNewsCard'
import Slider1 from '../Slider/Slider1/Slider1'
import blogThumb1 from '../../assets/Images/blogThumb1_2.webp'
import blogThumb2 from '../../assets/Images/blogThumb1_3.webp'
import blogThumb3 from '../../assets/Images/blogThumb1_1.webp'
import blogProfile1 from '../../assets/Images/blogProfile1_2.webp'
import blogProfile2 from '../../assets/Images/blogProfile1_3.webp'
import blogProfile3 from '../../assets/Images/blogProfile1_1.webp'

export default function BlogAndNews() {
  const blogCardComponents = [
    <BlogAndNewsCard 
      imageUrl={blogThumb1} 
      category="Uncategorized" 
      date="March 14,2024" 
      title="Best And Fastest Data Server Ever" 
      profileImageUrl={blogProfile1} 
      authorName="Admin" 
      authorRole="Co, Founder" 
    />,
    <BlogAndNewsCard 
      imageUrl={blogThumb2} 
      category="Technology" 
      date="March 24,2024" 
      title="Best And Fastest Data Server Ever" 
      profileImageUrl={blogProfile2} 
      authorName="Admin" 
      authorRole="Co, Founder" 
    />,
    <BlogAndNewsCard 
      imageUrl={blogThumb3} 
      category="Shared Hosting" 
      date="March 29,2024" 
      title="Best And Fastest Data Server Ever" 
      profileImageUrl={blogProfile3} 
      authorName="Admin" 
      authorRole="Co, Founder" 
    />,
  ];

  return (
    <div className='exContainer p-4'>
      <Title title="Blog And News" heading="Featured News And Insights"/>
      <Slider1 cards={blogCardComponents} slides={3}/>
    </div>
  )
}
