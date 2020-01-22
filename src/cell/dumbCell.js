import LiveCell from "./liveCell";
import DeadCell from './deadCell';

class DumbCell {
  static createLive() {
    return new LiveCell();
  }

  static createDead() {
    return new DeadCell();
  }

  static createRandom(threshold = 0.5) {
    if (Math.random() >= threshold) {
        return DumbCell.createLive();
    }

    return DumbCell.createDead();
  }
};

export default DumbCell;
