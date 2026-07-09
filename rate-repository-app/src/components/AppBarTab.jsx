import { Link, useMatch } from 'react-router-native'
import Text from './Text'

const AppBarTab = ({ children, pageName }) => {
  const match = useMatch(`/${pageName}`)

  if (match) {
    return (
      <Text fontWeight="bold" fontSize="xl">
        {children}
      </Text>
    )
  }

  return (
    <Link to={`/${pageName}`} underlayColor="transparent" replace>
      <Text fontWeight="bold" fontSize="xl">
        {children}
      </Text>
    </Link>
  )
}

export default AppBarTab
