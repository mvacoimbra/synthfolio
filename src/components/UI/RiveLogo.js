import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import projectsRiv from '../../projects.riv';

export default function RiveLogo({ className }) {
  const STATE_MACHINE = 'State Machine 1';
  const INPUT = 'Trigger 1';
  const ARTBOARD = 'Synth-logo';

  const { rive, RiveComponent } = useRive({
    src: projectsRiv,
    artboard: ARTBOARD,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  // if (rive) {
  //   console.log(rive.contents);
  // }

  return (
    <div className={className}>
      <RiveComponent />
    </div>
  );
}
