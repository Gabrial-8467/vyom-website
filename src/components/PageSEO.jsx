import { Helmet } from 'react-helmet-async'

const PageSEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = "/minfnlogo.png",
  ogType = "website"
}) => {
  const fullTitle = title.includes('Falcon') ? title : `${title} - Falcon Programming Language`
  const fullUrl = `https://falcon-lang.com${canonicalUrl}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Falcon Language Team" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://falcon-lang.com${ogImage}`} />
      <meta property="og:image:alt" content="Falcon Programming Language" />
      <meta property="og:site_name" content="Falcon Programming Language" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://falcon-lang.com${ogImage}`} />
      
      {/* Additional Meta */}
      <meta name="language" content="English" />
      <meta name="theme-color" content="#f97316" />
    </Helmet>
  )
}

export default PageSEO
