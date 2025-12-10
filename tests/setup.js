import { expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'

// agrega matchers como toBeVisible()
expect.extend(matchers)