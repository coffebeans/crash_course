class DeadCell {
  changesState(numberOfNeighborsAlive) {
    return this.becomesAlive(numberOfNeighborsAlive);
  }

  isAlive() {
    return false;
  }

  becomesAlive(numberOfNeighborsAlive) {
    return numberOfNeighborsAlive === 3;
  }
};

export default DeadCell;
