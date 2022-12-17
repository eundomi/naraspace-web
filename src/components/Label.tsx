import React, { useCallback } from 'react';
import styled from 'styled-components';

interface LabelProps {
  text?: string;
  textAlign?: 'left' | 'right' | 'center';
  size?: number;
  color?: string;
  weight?: 'normal' | 'medium' | 'bold' | number;
  lineHeight?: string;
}

const Label = ({
  text = '',
  textAlign = 'left',
  size = 16,
  color = '#000',
  weight = 'normal',
  lineHeight = '1.5',
}: LabelProps) => {
  const getFontWeight = useCallback((): string => {
    if (weight == 'bold') return '700';
    else if (weight == 'medium') return '500';
    else if (typeof weight == 'number') return `${weight}`;
    return '400';
  }, [weight]);

  return (
    <Container
      textAlign={textAlign}
      size={size}
      color={color}
      weight={getFontWeight()}
      lineHeight={lineHeight}
    >
      {text}
    </Container>
  );
};

export interface ContainerProps {
  size: number;
  textAlign: string;
  color: string;
  weight: string;
  lineHeight: string;
}

const Container = styled.div<ContainerProps>`
  font-size: ${(props): number => props.size}px;
  color: ${(props): string => props.color};
  text-overflow: ellipsis;
  text-align: ${(props): string => props.textAlign};
  font-weight: ${({ weight }): string => weight};
  line-height: ${(props): string => props.lineHeight};
`;

export default React.memo(Label);
