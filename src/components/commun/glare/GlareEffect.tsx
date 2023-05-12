import GlareCircle from '../GlareCircle';

function GlareEffect({
  size = '300',
  background = 'linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)',
}: {
  background?: string;
  size: number | string;
}) {
  return <GlareCircle />;
}

export default GlareEffect;
