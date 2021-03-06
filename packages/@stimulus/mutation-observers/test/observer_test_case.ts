import { DOMTestCase } from "@stimulus/test"

export interface Observer {
  start()
  stop()
}

export class ObserverTestCase extends DOMTestCase {
  observer: Observer
  calls: [string, any[]][] = []

  async setup() {
    this.observer.start()
  }

  async teardown() {
    this.observer.stop()
  }

  get callNames() {
    return this.calls.map(([name, args]) => name)
  }

  get callArguments() {
    return this.calls.map(([name, args]) => args)
  }

  recordCall(methodName: string, ...args: any[]) {
    this.calls.push([methodName, args])
  }
}
