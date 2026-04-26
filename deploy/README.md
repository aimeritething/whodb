# DataFlow Sealos Packaging

This directory contains the Sealos cluster-image packaging for DataFlow.

## Layout

- `Kubefile`: cluster image build recipe
- `install.sh`: install entrypoint executed by the cluster image
- `charts/dataflow/dataflow-values.yaml`: default user override template
- `charts/dataflow`: Helm chart used by the installer

## CI Flows

- PR workflow: `.github/workflows/pr-docker-build.yml`
  - builds runtime images on both `amd64` and `arm64`
  - pushes it into a temporary local registry
  - runs `sealos registry save`
  - exports Sealos image tar artifacts for both architectures
- Release workflow: `.github/workflows/release.yaml`
  - publishes multi-arch runtime images
  - packages multi-arch Sealos cluster images
  - publishes release tarballs for version tags

## Local Packaging Flow

1. Build and push a runtime image that the chart references.
2. Update `charts/dataflow/values.yaml` with that image repository and tag.
3. Run `sealos registry save --registry-dir=registry_<arch> --arch <arch> .` in `deploy/`.
4. Build `Kubefile` to produce the final cluster image.

## User Overrides

During install, `install.sh` ensures the user override file exists at:

- `/root/.sealos/cloud/values/apps/dataflow/dataflow-values.yaml`

When the file does not exist yet, it is initialized from:

- `deploy/charts/dataflow/dataflow-values.yaml`
