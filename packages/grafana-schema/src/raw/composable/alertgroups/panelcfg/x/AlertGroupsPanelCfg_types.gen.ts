// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTsTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

export const pluginVersion = "11.0.0-pre";

export interface Options {
  /**
   * Name of the alertmanager used as a source for alerts
   */
  alertmanager: string;
  /**
   * Expand all alert groups by default
   */
  expandAll: boolean;
  /**
   * Comma-separated list of values used to filter alert results
   */
  labels: string;
}
