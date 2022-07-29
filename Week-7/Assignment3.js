function detectLoop(head) {
    let slowRunner = head;
    let fastRunner = head.next;

    while (slowRunner === fastRunner) {
        if (slowRunner === null || fastRunner === null) {
            return false;
        }
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;
    }
    return true;
}
