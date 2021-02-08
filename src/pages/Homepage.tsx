import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Directory from '../components/directory'

import './homepage.styles.scss'

interface IHomePageProps extends RouteComponentProps { }

const HomePage: React.FunctionComponent<IHomePageProps> = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage