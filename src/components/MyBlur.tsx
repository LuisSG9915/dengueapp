import {
  add,
  Canvas,
  Circle,
  LinearGradient,
  vec,
  sub,
  Fill,
  useLoop,
  mix,
  BackdropFilter,
  Blur,
  useDerivedValue,
} from '@shopify/react-native-skia';
import * as React from 'react';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const c = vec(width / 2, (height / 2) * 1);
const r = c.x + 10;

export default function MyBlur() {
  const progress = useLoop({ duration: 10000 });
  const start = useDerivedValue(
    () => sub(c, vec(0, mix(progress.current, r, r))),
    [progress]
  );
  const end = useDerivedValue(
    () => add(c, vec(0, mix(progress.current, r, r / 2))),
    [progress]
  );
  const radius = useDerivedValue(
    () => mix(progress.current, r, r * 5),
    // () => mix(progress.current, r, r / 5),
    [progress]
  );
  return (
    <Canvas style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Fill color={'#e5e8ef'} />
      <Circle c={c} r={radius}>
        <LinearGradient
          start={start}
          end={end}
          colors={['rgb(178, 56, 45)', 'rgb(255, 210, 0)']}
        />
      </Circle>
      <BackdropFilter filter={<Blur blur={20} />}>
        <Fill color={'#DFE3E610'} />
      </BackdropFilter>
    </Canvas>
  );
}
