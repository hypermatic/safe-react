import { useFormState } from 'react-final-form'

import Row from 'src/components/layout/Row'
import Paragraph from 'src/components/layout/Paragraph'
import { useStyles } from 'src/routes/safe/components/Balances/SendModal/screens/ContractInteraction/style'
import { ReactElement } from 'react'

const FormErrorMessage = (): ReactElement | null => {
  const classes = useStyles()
  const { modifiedSinceLastSubmit, submitError } = useFormState({
    subscription: { modifiedSinceLastSubmit: true, submitError: true },
  })

  const hasNewSubmitError = !!submitError && !modifiedSinceLastSubmit
  return hasNewSubmitError ? (
    <Row align="center" className={classes.fullWidth} margin="xs">
      <Paragraph color="error" noMargin size="md" style={{ letterSpacing: '-0.5px', overflowWrap: 'anywhere' }}>
        {submitError}
      </Paragraph>
    </Row>
  ) : null
}

export default FormErrorMessage
