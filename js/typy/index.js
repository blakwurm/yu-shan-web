// Taken from https://github.com/flexdinesh/typy
import Typy from './typy.js';

const t = (input, objectPath) => new Typy().t(input, objectPath);

export default t;
