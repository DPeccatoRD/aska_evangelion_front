import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

export const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography component='h2' gutterBottom variant='h4'>
      Упс! Что-то пошло не так
    </Typography>
    <Typography gutterBottom variant='body1'>
      Произошла ошибка при отображении этого компонента
    </Typography>
    <Accordion sx={{ my: 2, textAlign: 'left' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Технические детали</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component='pre' sx={{ whiteSpace: 'pre-wrap', fontSize: '0.875rem' }}>
          {error.message}
        </Box>
        <Box component='pre' sx={{ whiteSpace: 'pre-wrap', fontSize: '0.875rem', mt: 1 }}>
          {error.stack}
        </Box>
      </AccordionDetails>
    </Accordion>
    <Button color='primary' variant='contained' onClick={resetError}>
      Попробовать снова
    </Button>
  </Box>
);
