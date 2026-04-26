{{/*
Expand the name of the chart.
*/}}
{{- define "dataflow.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "dataflow.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "dataflow.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "dataflow.labels" -}}
helm.sh/chart: {{ include "dataflow.chart" . }}
{{ include "dataflow.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "dataflow.selectorLabels" -}}
app.kubernetes.io/name: {{ include "dataflow.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "dataflow.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "dataflow.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{- define "dataflow.metadataPostgresNativeEnabled" -}}
{{- $metadata := default (dict) .Values.metadata -}}
{{- $native := default (dict) $metadata.native -}}
{{- $enabled := true -}}
{{- if hasKey $native "enabled" -}}
{{- $enabled = $native.enabled -}}
{{- end -}}
{{- if $enabled -}}true{{- else -}}false{{- end -}}
{{- end }}

{{- define "dataflow.metadataPostgresClusterName" -}}
{{- $metadata := default (dict) .Values.metadata -}}
{{- $native := default (dict) $metadata.native -}}
{{- $clusterName := (default "" $native.clusterName) | trim -}}
{{- if $clusterName -}}
{{- $clusterName -}}
{{- else -}}
{{- printf "%s-pg" .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end }}

{{- define "dataflow.metadataPostgresCredentialSecretName" -}}
{{- printf "%s-conn-credential" (include "dataflow.metadataPostgresClusterName" .) -}}
{{- end }}

{{- define "dataflow.secretName" -}}
{{- if .Values.secret.existingSecret }}
{{- .Values.secret.existingSecret }}
{{- else }}
{{- printf "%s-secret" (include "dataflow.fullname" .) }}
{{- end }}
{{- end }}

{{- define "dataflow.ingressHost" -}}
{{- if .Values.ingress.host -}}
{{- .Values.ingress.host -}}
{{- else -}}
{{- $cloudDomain := required "cloudDomain is required when ingress.host is empty" .Values.cloudDomain -}}
{{- printf "%s.%s" (default "dataflow" .Values.ingress.hostPrefix) $cloudDomain -}}
{{- end -}}
{{- end }}

{{- define "dataflow.appHost" -}}
{{- if .Values.app.hostOverride -}}
{{- .Values.app.hostOverride -}}
{{- else -}}
{{- include "dataflow.ingressHost" . -}}
{{- end -}}
{{- end }}
