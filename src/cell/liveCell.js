class LiveCell {
  changesState(numberOfNeighborsAlive) {
    return !this.staysAlive(numberOfNeighborsAlive);
  }

  isAlive() {
    return true;
  }

  staysAlive(numberOfNeighborsAlive) {
    return numberOfNeighborsAlive === 2 || numberOfNeighborsAlive === 3;
  }
};

export default LiveCell;
