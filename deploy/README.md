# DataFlow Sealos Packaging

This directory contains the Sealos cluster-image packaging for DataFlow.

## Layout

- `Kubefile`: cluster image build recipe
- `install.sh`: install entrypoint executed by the cluster image
- `charts/dataflow`: Helm chart used by the installer

## CI Flows

- PR workflow: `.github/workflows/pr-sealos-image.yml`
  - builds an `amd64` runtime image locally
  - pushes it into a temporary local registry
  - runs `sealos registry save`
  - exports an `amd64` Sealos image tar artifact
- Release workflow: `.github/workflows/release.yaml`
  - publishes multi-arch runtime images
  - packages multi-arch Sealos cluster images
  - publishes release tarballs for version tags

## Local Packaging Flow

1. Build and push a runtime image that the chart references.
2. Update `charts/dataflow/values.yaml` with that image repository and tag.
3. Run `sealos registry save --registry-dir=registry_<arch> --arch <arch> .` in `deploy/`.
4. Build `Kubefile` to produce the final cluster image.
