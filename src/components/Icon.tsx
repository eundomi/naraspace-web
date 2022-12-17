import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export interface IconProps {
  width: number;
  height: number;
  src: string;
  alt?: string;
  onClick?: () => void;
}

const IconImage: React.FC<IconProps> = ({ width, height, src, alt = 'Icon' }) => {
  return (
    <Container width={width} height={height}>
      <Image width={width} height={height} alt={alt} src={src} unoptimized={true} priority={true} />
    </Container>
  );
};

const Container = styled.div<{ width: number; height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => props.width}px;
  min-height: ${(props) => props.height}px;
`;

export default React.memo(IconImage);
