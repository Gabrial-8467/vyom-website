import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href = null, 
  onClick = null,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900'
  
  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500',
    secondary: 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500',
    ghost: 'text-gray-300 hover:text-orange-500 hover:bg-gray-800 focus:ring-orange-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
