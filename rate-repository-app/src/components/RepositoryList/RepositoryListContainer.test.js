import { render, screen, within } from '@testing-library/react-native'
import RepositoryListContainer from './RepositoryListContainer'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }

      await render(<RepositoryListContainer repositories={repositories} />)

      const repositoryItems = await screen.getAllByTestId('repositoryItem')
      expect(repositoryItems).toHaveLength(2)

      const [firstRepo, secondRepo] = repositoryItems

      expect(within(firstRepo).getByText('jaredpalmer/formik')).toBeVisible()
      expect(
        within(firstRepo).getByText('Build forms in React, without the tears'),
      ).toBeVisible()
      expect(within(firstRepo).getByText('TypeScript')).toBeVisible()
      expect(within(firstRepo).getByText('1.6K')).toBeVisible()
      expect(within(firstRepo).getByText('21.9K')).toBeVisible()
      expect(within(firstRepo).getByText('88')).toBeVisible()
      expect(within(firstRepo).getByText('3')).toBeVisible()

      expect(
        within(secondRepo).getByText('async-library/react-async'),
      ).toBeVisible()
      expect(
        within(secondRepo).getByText(
          'Flexible promise-based React data loader',
        ),
      ).toBeVisible()
      expect(within(secondRepo).getByText('JavaScript')).toBeVisible()
      expect(within(secondRepo).getByText('69')).toBeVisible()
      expect(within(secondRepo).getByText('1.8K')).toBeVisible()
      expect(within(secondRepo).getByText('72')).toBeVisible()
      expect(within(secondRepo).getByText('3')).toBeVisible()
    })
  })
})
